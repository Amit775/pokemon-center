import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatCreateWithoutMoveMetaStatChangesInput } from "../inputs/StatCreateWithoutMoveMetaStatChangesInput";
import { StatUpdateWithoutMoveMetaStatChangesInput } from "../inputs/StatUpdateWithoutMoveMetaStatChangesInput";
import { StatWhereInput } from "../inputs/StatWhereInput";

@TypeGraphQL.InputType("StatUpsertWithoutMoveMetaStatChangesInput", {})
export class StatUpsertWithoutMoveMetaStatChangesInput {
  @TypeGraphQL.Field(_type => StatUpdateWithoutMoveMetaStatChangesInput, {
    nullable: false
  })
  update!: StatUpdateWithoutMoveMetaStatChangesInput;

  @TypeGraphQL.Field(_type => StatCreateWithoutMoveMetaStatChangesInput, {
    nullable: false
  })
  create!: StatCreateWithoutMoveMetaStatChangesInput;

  @TypeGraphQL.Field(_type => StatWhereInput, {
    nullable: true
  })
  where?: StatWhereInput | undefined;
}
