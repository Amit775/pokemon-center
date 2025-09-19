import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonMoveMethodUpdateInput } from "../../../inputs/PokemonMoveMethodUpdateInput";
import { PokemonMoveMethodWhereUniqueInput } from "../../../inputs/PokemonMoveMethodWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePokemonMoveMethodArgs {
  @TypeGraphQL.Field(_type => PokemonMoveMethodUpdateInput, {
    nullable: false
  })
  data!: PokemonMoveMethodUpdateInput;

  @TypeGraphQL.Field(_type => PokemonMoveMethodWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonMoveMethodWhereUniqueInput;
}
