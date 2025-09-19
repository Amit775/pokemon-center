import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveTargetCreateWithoutMovesInput } from "../inputs/MoveTargetCreateWithoutMovesInput";
import { MoveTargetUpdateWithoutMovesInput } from "../inputs/MoveTargetUpdateWithoutMovesInput";
import { MoveTargetWhereInput } from "../inputs/MoveTargetWhereInput";

@TypeGraphQL.InputType("MoveTargetUpsertWithoutMovesInput", {})
export class MoveTargetUpsertWithoutMovesInput {
  @TypeGraphQL.Field(_type => MoveTargetUpdateWithoutMovesInput, {
    nullable: false
  })
  update!: MoveTargetUpdateWithoutMovesInput;

  @TypeGraphQL.Field(_type => MoveTargetCreateWithoutMovesInput, {
    nullable: false
  })
  create!: MoveTargetCreateWithoutMovesInput;

  @TypeGraphQL.Field(_type => MoveTargetWhereInput, {
    nullable: true
  })
  where?: MoveTargetWhereInput | undefined;
}
