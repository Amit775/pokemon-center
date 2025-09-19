import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonColorCreateManyInput } from "../../../inputs/PokemonColorCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnPokemonColorArgs {
  @TypeGraphQL.Field(_type => [PokemonColorCreateManyInput], {
    nullable: false
  })
  data!: PokemonColorCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
