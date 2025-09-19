import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatUpdateWithoutMoveMetaStatChangesInput } from "../inputs/StatUpdateWithoutMoveMetaStatChangesInput";
import { StatWhereInput } from "../inputs/StatWhereInput";

@TypeGraphQL.InputType("StatUpdateToOneWithWhereWithoutMoveMetaStatChangesInput", {})
export class StatUpdateToOneWithWhereWithoutMoveMetaStatChangesInput {
  @TypeGraphQL.Field(_type => StatWhereInput, {
    nullable: true
  })
  where?: StatWhereInput | undefined;

  @TypeGraphQL.Field(_type => StatUpdateWithoutMoveMetaStatChangesInput, {
    nullable: false
  })
  data!: StatUpdateWithoutMoveMetaStatChangesInput;
}
