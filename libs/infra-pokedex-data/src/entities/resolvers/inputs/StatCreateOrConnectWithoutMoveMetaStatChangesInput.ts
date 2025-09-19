import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatCreateWithoutMoveMetaStatChangesInput } from "../inputs/StatCreateWithoutMoveMetaStatChangesInput";
import { StatWhereUniqueInput } from "../inputs/StatWhereUniqueInput";

@TypeGraphQL.InputType("StatCreateOrConnectWithoutMoveMetaStatChangesInput", {})
export class StatCreateOrConnectWithoutMoveMetaStatChangesInput {
  @TypeGraphQL.Field(_type => StatWhereUniqueInput, {
    nullable: false
  })
  where!: StatWhereUniqueInput;

  @TypeGraphQL.Field(_type => StatCreateWithoutMoveMetaStatChangesInput, {
    nullable: false
  })
  create!: StatCreateWithoutMoveMetaStatChangesInput;
}
