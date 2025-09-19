import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateWithoutTypeInput } from "../inputs/MoveCreateWithoutTypeInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveCreateOrConnectWithoutTypeInput", {})
export class MoveCreateOrConnectWithoutTypeInput {
  @TypeGraphQL.Field(_type => MoveWhereUniqueInput, {
    nullable: false
  })
  where!: MoveWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveCreateWithoutTypeInput, {
    nullable: false
  })
  create!: MoveCreateWithoutTypeInput;
}
