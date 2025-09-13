import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovesCreateOrConnectWithoutMetaInput } from "../inputs/MovesCreateOrConnectWithoutMetaInput";
import { MovesCreateWithoutMetaInput } from "../inputs/MovesCreateWithoutMetaInput";
import { MovesWhereUniqueInput } from "../inputs/MovesWhereUniqueInput";

@TypeGraphQL.InputType("MovesCreateNestedOneWithoutMetaInput", {})
export class MovesCreateNestedOneWithoutMetaInput {
  @TypeGraphQL.Field(_type => MovesCreateWithoutMetaInput, {
    nullable: true
  })
  create?: MovesCreateWithoutMetaInput | undefined;

  @TypeGraphQL.Field(_type => MovesCreateOrConnectWithoutMetaInput, {
    nullable: true
  })
  connectOrCreate?: MovesCreateOrConnectWithoutMetaInput | undefined;

  @TypeGraphQL.Field(_type => MovesWhereUniqueInput, {
    nullable: true
  })
  connect?: MovesWhereUniqueInput | undefined;
}
