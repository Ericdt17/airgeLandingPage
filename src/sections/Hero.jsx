import { Button } from "../components";
import { useModal } from "../context/ModalContext";
import { arrowRight } from "../assets/icons";
import { heroDashboard } from "../assets/images";

const Hero = () => {
  const { open } = useModal();

  return (
    <section
      id='home'
      className='relative w-full overflow-hidden bg-white'
    >
      <div className='absolute inset-0 opacity-20 bg-hero-grid bg-[length:40px_40px]' />

      <div className='relative max-container padding-x pt-6 sm:pt-16 lg:pt-32 pb-8'>
        <div className='mx-auto max-w-[747px] text-center'>
          <h1 className='font-palanquin font-extrabold text-[#1a1a1a] text-[28px] leading-snug tracking-tight sm:text-4xl sm:leading-tight lg:text-[72px] lg:leading-[72px] lg:tracking-[-1.8px]'>
            <span className='block'>Votre Partenaire de</span>
            <span className='block'>Confiance pour la</span>
            <span className='block text-brand-blue'>Gestion des Livraisons</span>
          </h1>

          <p className='mt-4 sm:mt-6 font-montserrat text-base leading-6 text-gray-500 sm:text-xl sm:leading-7'>
            Sécurisez et optimisez votre flux logistique : une solution de pointe
            pour une protection des données et une efficacité opérationnelle
            inégalée au Cameroun.
          </p>

          <div className='mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4'>
            <Button
              label='Démarrer maintenant'
              iconURL={arrowRight}
              iconAlt='arrow right'
              iconWrapperClassName='ml-2 inline-flex items-center justify-center w-7 h-7 rounded-full bg-white'
              iconClassName='w-5 h-5'
              backgroundColor='bg-brand-blue'
              textColor='text-white'
              borderColor='border-brand-blue'
              fullWidth
              onClick={open}
            />
            <Button
              label='En savoir plus'
              iconURL={arrowRight}
              iconAlt='arrow right'
              iconWrapperClassName='ml-2 inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-100'
              iconClassName='w-5 h-5'
              backgroundColor='bg-white'
              textColor='text-gray-900'
              borderColor='border-gray-200'
              fullWidth
              href='#solution'
            />
          </div>
        </div>

        <div className='relative mx-auto max-w-5xl'>
         
            <img
              src={heroDashboard}
              alt='Tableau de bord LivSight'
              className='h-auto w-full'
            />
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
