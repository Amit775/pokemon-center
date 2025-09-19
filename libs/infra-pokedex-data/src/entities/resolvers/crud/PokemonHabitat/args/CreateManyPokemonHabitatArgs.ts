import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonHabitatCreateManyInput } from "../../../inputs/PokemonHabitatCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPokemonHabitatArgs {
  @TypeGraphQL.Field(_type => [PokemonHabitatCreateManyInput], {
    nullable: false
  })
  data!: PokemonHabitatCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
