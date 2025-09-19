import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonTypeCreateManyInput } from "../../../inputs/PokemonTypeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPokemonTypeArgs {
  @TypeGraphQL.Field(_type => [PokemonTypeCreateManyInput], {
    nullable: false
  })
  data!: PokemonTypeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
