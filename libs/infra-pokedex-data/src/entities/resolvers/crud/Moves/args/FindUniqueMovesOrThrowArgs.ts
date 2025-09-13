import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovesWhereUniqueInput } from "../../../inputs/MovesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMovesOrThrowArgs {
  @TypeGraphQL.Field(_type => MovesWhereUniqueInput, {
    nullable: false
  })
  where!: MovesWhereUniqueInput;
}
