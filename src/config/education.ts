
// education 
export type EducationItemType = {
    school: string
    major: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const educationList: Array<EducationItemType> = [
    {
      school: 'Zhejiang University of Science and Technology',
      major: 'Computer Science and Technology',
      logo: 'college',
      start: '2020',
      end: '2022'
    },
    {
      school:'ostfalia Hochschule für angewandte Wissenschaften',
      major:'Informatik',
      logo:'college',
      start:'2022',
      end:'present'
    }
  ]