import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovesWhereUniqueInput } from "../../../inputs/MovesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMovesArgs {
  @TypeGraphQL.Field(_type => MovesWhereUniqueInput, {
    nullable: false
  })
  where!: MovesWhereUniqueInput;
}
