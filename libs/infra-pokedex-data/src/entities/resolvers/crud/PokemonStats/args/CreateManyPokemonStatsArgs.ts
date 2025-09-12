import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonStatsCreateManyInput } from "../../../inputs/PokemonStatsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPokemonStatsArgs {
  @TypeGraphQL.Field(_type => [PokemonStatsCreateManyInput], {
    nullable: false
  })
  data!: PokemonStatsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
