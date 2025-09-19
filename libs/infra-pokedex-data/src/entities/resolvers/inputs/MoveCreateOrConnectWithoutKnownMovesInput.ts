import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateWithoutKnownMovesInput } from "../inputs/MoveCreateWithoutKnownMovesInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveCreateOrConnectWithoutKnownMovesInput", {})
export class MoveCreateOrConnectWithoutKnownMovesInput {
  @TypeGraphQL.Field(_type => MoveWhereUniqueInput, {
    nullable: false
  })
  where!: MoveWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveCreateWithoutKnownMovesInput, {
    nullable: false
  })
  create!: MoveCreateWithoutKnownMovesInput;
}
