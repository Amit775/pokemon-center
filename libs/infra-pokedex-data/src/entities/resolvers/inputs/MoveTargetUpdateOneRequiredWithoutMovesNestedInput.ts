import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveTargetCreateOrConnectWithoutMovesInput } from "../inputs/MoveTargetCreateOrConnectWithoutMovesInput";
import { MoveTargetCreateWithoutMovesInput } from "../inputs/MoveTargetCreateWithoutMovesInput";
import { MoveTargetUpdateToOneWithWhereWithoutMovesInput } from "../inputs/MoveTargetUpdateToOneWithWhereWithoutMovesInput";
import { MoveTargetUpsertWithoutMovesInput } from "../inputs/MoveTargetUpsertWithoutMovesInput";
import { MoveTargetWhereUniqueInput } from "../inputs/MoveTargetWhereUniqueInput";

@TypeGraphQL.InputType("MoveTargetUpdateOneRequiredWithoutMovesNestedInput", {})
export class MoveTargetUpdateOneRequiredWithoutMovesNestedInput {
  @TypeGraphQL.Field(_type => MoveTargetCreateWithoutMovesInput, {
    nullable: true
  })
  create?: MoveTargetCreateWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => MoveTargetCreateOrConnectWithoutMovesInput, {
    nullable: true
  })
  connectOrCreate?: MoveTargetCreateOrConnectWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => MoveTargetUpsertWithoutMovesInput, {
    nullable: true
  })
  upsert?: MoveTargetUpsertWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => MoveTargetWhereUniqueInput, {
    nullable: true
  })
  connect?: MoveTargetWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MoveTargetUpdateToOneWithWhereWithoutMovesInput, {
    nullable: true
  })
  update?: MoveTargetUpdateToOneWithWhereWithoutMovesInput | undefined;
}
