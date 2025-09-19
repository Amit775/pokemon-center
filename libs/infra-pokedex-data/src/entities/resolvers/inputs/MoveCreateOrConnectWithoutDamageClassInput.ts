import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateWithoutDamageClassInput } from "../inputs/MoveCreateWithoutDamageClassInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveCreateOrConnectWithoutDamageClassInput", {})
export class MoveCreateOrConnectWithoutDamageClassInput {
  @TypeGraphQL.Field(_type => MoveWhereUniqueInput, {
    nullable: false
  })
  where!: MoveWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveCreateWithoutDamageClassInput, {
    nullable: false
  })
  create!: MoveCreateWithoutDamageClassInput;
}
