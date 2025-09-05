import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ConquestPokemonEvolution as PrismaConquestPokemonEvolution } from '@prisma/client';

@ObjectType()
export class ConquestPokemonEvolution implements PrismaConquestPokemonEvolution {
  @Field(() => Int)
  evolved_species_id: number;

  @Field(() => Int, { nullable: true })
  required_stat_id: number;

  @Field(() => Int, { nullable: true })
  minimum_stat: number;

  @Field(() => Int, { nullable: true })
  minimum_link: number;

  @Field(() => Int, { nullable: true })
  kingdom_id: number;

  @Field(() => Int, { nullable: true })
  warrior_gender_id: number;

  @Field(() => Int, { nullable: true })
  item_id: number;

  @Field(() => Int)
  recruiting_ko_required: number;

}
