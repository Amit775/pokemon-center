import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateOrConnectWithoutMetaStatChangesInput } from "../inputs/MoveCreateOrConnectWithoutMetaStatChangesInput";
import { MoveCreateWithoutMetaStatChangesInput } from "../inputs/MoveCreateWithoutMetaStatChangesInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveCreateNestedOneWithoutMetaStatChangesInput", {})
export class MoveCreateNestedOneWithoutMetaStatChangesInput {
  @TypeGraphQL.Field(_type => MoveCreateWithoutMetaStatChangesInput, {
    nullable: true
  })
  create?: MoveCreateWithoutMetaStatChangesInput | undefined;

  @TypeGraphQL.Field(_type => MoveCreateOrConnectWithoutMetaStatChangesInput, {
    nullable: true
  })
  connectOrCreate?: MoveCreateOrConnectWithoutMetaStatChangesInput | undefined;

  @TypeGraphQL.Field(_type => MoveWhereUniqueInput, {
    nullable: true
  })
  connect?: MoveWhereUniqueInput | undefined;
}
