import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonShapeUpdateInput } from "../../../inputs/PokemonShapeUpdateInput";
import { PokemonShapeWhereUniqueInput } from "../../../inputs/PokemonShapeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePokemonShapeArgs {
  @TypeGraphQL.Field(_type => PokemonShapeUpdateInput, {
    nullable: false
  })
  data!: PokemonShapeUpdateInput;

  @TypeGraphQL.Field(_type => PokemonShapeWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonShapeWhereUniqueInput;
}
