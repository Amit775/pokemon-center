import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveCreateOrConnectWithoutMetaInput } from "../inputs/MoveCreateOrConnectWithoutMetaInput";
import { MoveCreateWithoutMetaInput } from "../inputs/MoveCreateWithoutMetaInput";
import { MoveWhereUniqueInput } from "../inputs/MoveWhereUniqueInput";

@TypeGraphQL.InputType("MoveCreateNestedOneWithoutMetaInput", {})
export class MoveCreateNestedOneWithoutMetaInput {
  @TypeGraphQL.Field(_type => MoveCreateWithoutMetaInput, {
    nullable: true
  })
  create?: MoveCreateWithoutMetaInput | undefined;

  @TypeGraphQL.Field(_type => MoveCreateOrConnectWithoutMetaInput, {
    nullable: true
  })
  connectOrCreate?: MoveCreateOrConnectWithoutMetaInput | undefined;

  @TypeGraphQL.Field(_type => MoveWhereUniqueInput, {
    nullable: true
  })
  connect?: MoveWhereUniqueInput | undefined;
}
