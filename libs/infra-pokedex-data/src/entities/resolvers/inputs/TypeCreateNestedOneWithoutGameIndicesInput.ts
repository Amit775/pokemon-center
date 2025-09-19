import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateOrConnectWithoutGameIndicesInput } from "../inputs/TypeCreateOrConnectWithoutGameIndicesInput";
import { TypeCreateWithoutGameIndicesInput } from "../inputs/TypeCreateWithoutGameIndicesInput";
import { TypeWhereUniqueInput } from "../inputs/TypeWhereUniqueInput";

@TypeGraphQL.InputType("TypeCreateNestedOneWithoutGameIndicesInput", {})
export class TypeCreateNestedOneWithoutGameIndicesInput {
  @TypeGraphQL.Field(_type => TypeCreateWithoutGameIndicesInput, {
    nullable: true
  })
  create?: TypeCreateWithoutGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => TypeCreateOrConnectWithoutGameIndicesInput, {
    nullable: true
  })
  connectOrCreate?: TypeCreateOrConnectWithoutGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => TypeWhereUniqueInput, {
    nullable: true
  })
  connect?: TypeWhereUniqueInput | undefined;
}
