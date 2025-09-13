import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveTargetsCreateWithoutMovesInput } from "../inputs/MoveTargetsCreateWithoutMovesInput";
import { MoveTargetsWhereUniqueInput } from "../inputs/MoveTargetsWhereUniqueInput";

@TypeGraphQL.InputType("MoveTargetsCreateOrConnectWithoutMovesInput", {})
export class MoveTargetsCreateOrConnectWithoutMovesInput {
  @TypeGraphQL.Field(_type => MoveTargetsWhereUniqueInput, {
    nullable: false
  })
  where!: MoveTargetsWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveTargetsCreateWithoutMovesInput, {
    nullable: false
  })
  create!: MoveTargetsCreateWithoutMovesInput;
}
