import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ConquestPokemonEvolution as PrismaConquestPokemonEvolution } from '@prisma/client';

@ObjectType()
export class ConquestPokemonEvolution implements PrismaConquestPokemonEvolution {
  @Field(() => Int)
  evolved_species_id: Int;

  @Field(() => Int, { nullable: true })
  required_stat_id: Int;

  @Field(() => Int, { nullable: true })
  minimum_stat: Int;

  @Field(() => Int, { nullable: true })
  minimum_link: Int;

  @Field(() => Int, { nullable: true })
  kingdom_id: Int;

  @Field(() => Int, { nullable: true })
  warrior_gender_id: Int;

  @Field(() => Int, { nullable: true })
  item_id: Int;

  @Field(() => Int)
  recruiting_ko_required: Int;

}
