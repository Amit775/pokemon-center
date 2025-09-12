import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonEggGroupsCreateManyInput } from "../../../inputs/PokemonEggGroupsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnPokemonEggGroupsArgs {
  @TypeGraphQL.Field(_type => [PokemonEggGroupsCreateManyInput], {
    nullable: false
  })
  data!: PokemonEggGroupsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
