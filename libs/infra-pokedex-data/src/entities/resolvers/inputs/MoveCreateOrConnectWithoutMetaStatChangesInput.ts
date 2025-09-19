import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateWithoutMetaStatChangesInput } from "../inputs/MoveCreateWithoutMetaStatChangesInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveCreateOrConnectWithoutMetaStatChangesInput", {})
export class MoveCreateOrConnectWithoutMetaStatChangesInput {
  @TypeGraphQL.Field(_type => MoveWhereUniqueInput, {
    nullable: false
  })
  where!: MoveWhereUniqueInput;

  @TypeGraphQL.Field(_type => MoveCreateWithoutMetaStatChangesInput, {
    nullable: false
  })
  create!: MoveCreateWithoutMetaStatChangesInput;
}
