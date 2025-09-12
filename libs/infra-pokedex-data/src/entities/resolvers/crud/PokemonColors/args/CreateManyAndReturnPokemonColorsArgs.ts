import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonColorsCreateManyInput } from "../../../inputs/PokemonColorsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnPokemonColorsArgs {
  @TypeGraphQL.Field(_type => [PokemonColorsCreateManyInput], {
    nullable: false
  })
  data!: PokemonColorsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
