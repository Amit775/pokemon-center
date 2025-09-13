import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveTargetsOrderByWithRelationInput } from "../../../inputs/MoveTargetsOrderByWithRelationInput";
import { MoveTargetsWhereInput } from "../../../inputs/MoveTargetsWhereInput";
import { MoveTargetsWhereUniqueInput } from "../../../inputs/MoveTargetsWhereUniqueInput";
import { MoveTargetsScalarFieldEnum } from "../../../../enums/MoveTargetsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstMoveTargetsArgs {
  @TypeGraphQL.Field(_type => MoveTargetsWhereInput, {
    nullable: true
  })
  where?: MoveTargetsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MoveTargetsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MoveTargetsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveTargetsWhereUniqueInput, {
    nullable: true
  })
  cursor?: MoveTargetsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MoveTargetsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "identifier"> | undefined;
}
