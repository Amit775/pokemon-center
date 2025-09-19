import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatCreateOrConnectWithoutMoveMetaStatChangesInput } from "../inputs/StatCreateOrConnectWithoutMoveMetaStatChangesInput";
import { StatCreateWithoutMoveMetaStatChangesInput } from "../inputs/StatCreateWithoutMoveMetaStatChangesInput";
import { StatUpdateToOneWithWhereWithoutMoveMetaStatChangesInput } from "../inputs/StatUpdateToOneWithWhereWithoutMoveMetaStatChangesInput";
import { StatUpsertWithoutMoveMetaStatChangesInput } from "../inputs/StatUpsertWithoutMoveMetaStatChangesInput";
import { StatWhereUniqueInput } from "../inputs/StatWhereUniqueInput";

@TypeGraphQL.InputType("StatUpdateOneRequiredWithoutMoveMetaStatChangesNestedInput", {})
export class StatUpdateOneRequiredWithoutMoveMetaStatChangesNestedInput {
  @TypeGraphQL.Field(_type => StatCreateWithoutMoveMetaStatChangesInput, {
    nullable: true
  })
  create?: StatCreateWithoutMoveMetaStatChangesInput | undefined;

  @TypeGraphQL.Field(_type => StatCreateOrConnectWithoutMoveMetaStatChangesInput, {
    nullable: true
  })
  connectOrCreate?: StatCreateOrConnectWithoutMoveMetaStatChangesInput | undefined;

  @TypeGraphQL.Field(_type => StatUpsertWithoutMoveMetaStatChangesInput, {
    nullable: true
  })
  upsert?: StatUpsertWithoutMoveMetaStatChangesInput | undefined;

  @TypeGraphQL.Field(_type => StatWhereUniqueInput, {
    nullable: true
  })
  connect?: StatWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => StatUpdateToOneWithWhereWithoutMoveMetaStatChangesInput, {
    nullable: true
  })
  update?: StatUpdateToOneWithWhereWithoutMoveMetaStatChangesInput | undefined;
}
