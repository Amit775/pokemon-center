import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatCreateOrConnectWithoutMoveMetaStatChangesInput } from "../inputs/StatCreateOrConnectWithoutMoveMetaStatChangesInput";
import { StatCreateWithoutMoveMetaStatChangesInput } from "../inputs/StatCreateWithoutMoveMetaStatChangesInput";
import { StatWhereUniqueInput } from "../inputs/StatWhereUniqueInput";

@TypeGraphQL.InputType("StatCreateNestedOneWithoutMoveMetaStatChangesInput", {})
export class StatCreateNestedOneWithoutMoveMetaStatChangesInput {
  @TypeGraphQL.Field(_type => StatCreateWithoutMoveMetaStatChangesInput, {
    nullable: true
  })
  create?: StatCreateWithoutMoveMetaStatChangesInput | undefined;

  @TypeGraphQL.Field(_type => StatCreateOrConnectWithoutMoveMetaStatChangesInput, {
    nullable: true
  })
  connectOrCreate?: StatCreateOrConnectWithoutMoveMetaStatChangesInput | undefined;

  @TypeGraphQL.Field(_type => StatWhereUniqueInput, {
    nullable: true
  })
  connect?: StatWhereUniqueInput | undefined;
}
