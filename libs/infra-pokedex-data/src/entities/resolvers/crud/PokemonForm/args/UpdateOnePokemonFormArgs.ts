import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonFormUpdateInput } from "../../../inputs/PokemonFormUpdateInput";
import { PokemonFormWhereUniqueInput } from "../../../inputs/PokemonFormWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePokemonFormArgs {
  @TypeGraphQL.Field(_type => PokemonFormUpdateInput, {
    nullable: false
  })
  data!: PokemonFormUpdateInput;

  @TypeGraphQL.Field(_type => PokemonFormWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonFormWhereUniqueInput;
}
