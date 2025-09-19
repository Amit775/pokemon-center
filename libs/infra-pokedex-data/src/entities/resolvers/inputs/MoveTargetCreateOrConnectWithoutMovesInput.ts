import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveTargetCreateWithoutMovesInput } from "../inputs/MoveTargetCreateWithoutMovesInput";
import { MoveTargetWhereUniqueInput } from "../inputs/MoveTargetWhereUniqueInput";

@TypeGraphQL.InputType("MoveTargetCreateOrConnectWithoutMovesInput", {})
export class MoveTargetCreateOrConnectWithoutMovesInput {
  @TypeGraphQL.Field(_type => MoveTargetWhereUniqueInput, {
    nullable: false
  })
  where!: MoveTargetWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveTargetCreateWithoutMovesInput, {
    nullable: false
  })
  create!: MoveTargetCreateWithoutMovesInput;
}
