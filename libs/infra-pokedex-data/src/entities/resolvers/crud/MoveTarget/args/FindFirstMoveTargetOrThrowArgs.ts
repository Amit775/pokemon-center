import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MoveTargetOrderByWithRelationInput } from "../../../inputs/MoveTargetOrderByWithRelationInput";
import { MoveTargetWhereInput } from "../../../inputs/MoveTargetWhereInput";
import { MoveTargetWhereUniqueInput } from "../../../inputs/MoveTargetWhereUniqueInput";
import { MoveTargetScalarFieldEnum } from "../../../../enums/MoveTargetScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstMoveTargetOrThrowArgs {
  @TypeGraphQL.Field(_type => MoveTargetWhereInput, {
    nullable: true
  })
  where?: MoveTargetWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MoveTargetOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MoveTargetOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MoveTargetWhereUniqueInput, {
    nullable: true
  })
  cursor?: MoveTargetWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MoveTargetScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "identifier"> | undefined;
}
