import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonDexNumberCreateManyInput } from "../../../inputs/PokemonDexNumberCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPokemonDexNumberArgs {
  @TypeGraphQL.Field(_type => [PokemonDexNumberCreateManyInput], {
    nullable: false
  })
  data!: PokemonDexNumberCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
