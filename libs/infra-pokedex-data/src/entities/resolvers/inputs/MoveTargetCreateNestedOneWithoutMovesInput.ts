import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveTargetCreateOrConnectWithoutMovesInput } from "../inputs/MoveTargetCreateOrConnectWithoutMovesInput";
import { MoveTargetCreateWithoutMovesInput } from "../inputs/MoveTargetCreateWithoutMovesInput";
import { MoveTargetWhereUniqueInput } from "../inputs/MoveTargetWhereUniqueInput";

@TypeGraphQL.InputType("MoveTargetCreateNestedOneWithoutMovesInput", {})
export class MoveTargetCreateNestedOneWithoutMovesInput {
  @TypeGraphQL.Field(_type => MoveTargetCreateWithoutMovesInput, {
    nullable: true
  })
  create?: MoveTargetCreateWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => MoveTargetCreateOrConnectWithoutMovesInput, {
    nullable: true
  })
  connectOrCreate?: MoveTargetCreateOrConnectWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => MoveTargetWhereUniqueInput, {
    nullable: true
  })
  connect?: MoveTargetWhereUniqueInput | undefined;
}
