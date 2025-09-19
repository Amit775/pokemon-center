import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonColorUpdateInput } from "../../../inputs/PokemonColorUpdateInput";
import { PokemonColorWhereUniqueInput } from "../../../inputs/PokemonColorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePokemonColorArgs {
  @TypeGraphQL.Field(_type => PokemonColorUpdateInput, {
    nullable: false
  })
  data!: PokemonColorUpdateInput;

  @TypeGraphQL.Field(_type => PokemonColorWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonColorWhereUniqueInput;
}
