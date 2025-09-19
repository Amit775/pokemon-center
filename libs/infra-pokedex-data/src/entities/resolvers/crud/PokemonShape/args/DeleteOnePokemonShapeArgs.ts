import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonShapeWhereUniqueInput } from "../../../inputs/PokemonShapeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOnePokemonShapeArgs {
  @TypeGraphQL.Field(_type => PokemonShapeWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonShapeWhereUniqueInput;
}
