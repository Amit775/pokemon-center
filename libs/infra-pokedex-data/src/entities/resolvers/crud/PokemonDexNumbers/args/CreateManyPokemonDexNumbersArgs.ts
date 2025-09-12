import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonDexNumbersCreateManyInput } from "../../../inputs/PokemonDexNumbersCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPokemonDexNumbersArgs {
  @TypeGraphQL.Field(_type => [PokemonDexNumbersCreateManyInput], {
    nullable: false
  })
  data!: PokemonDexNumbersCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
