import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveUpdateInput } from "../../../inputs/MoveUpdateInput";
import { MoveWhereUniqueInput } from "../../../inputs/MoveWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMoveArgs {
  @TypeGraphQL.Field(_type => MoveUpdateInput, {
    nullable: false
  })
  data!: MoveUpdateInput;

  @TypeGraphQL.Field(_type => MoveWhereUniqueInput, {
    nullable: false
  })
  where!: MoveWhereUniqueInput;
}
