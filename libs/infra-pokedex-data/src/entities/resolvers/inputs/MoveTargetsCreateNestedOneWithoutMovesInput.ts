import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveTargetsCreateOrConnectWithoutMovesInput } from "../inputs/MoveTargetsCreateOrConnectWithoutMovesInput";
import { MoveTargetsCreateWithoutMovesInput } from "../inputs/MoveTargetsCreateWithoutMovesInput";
import { MoveTargetsWhereUniqueInput } from "../inputs/MoveTargetsWhereUniqueInput";

@TypeGraphQL.InputType("MoveTargetsCreateNestedOneWithoutMovesInput", {})
export class MoveTargetsCreateNestedOneWithoutMovesInput {
  @TypeGraphQL.Field(_type => MoveTargetsCreateWithoutMovesInput, {
    nullable: true
  })
  create?: MoveTargetsCreateWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => MoveTargetsCreateOrConnectWithoutMovesInput, {
    nullable: true
  })
  connectOrCreate?: MoveTargetsCreateOrConnectWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => MoveTargetsWhereUniqueInput, {
    nullable: true
  })
  connect?: MoveTargetsWhereUniqueInput | undefined;
}
