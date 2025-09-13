import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateOrConnectWithoutGameIndicesInput } from "../inputs/TypesCreateOrConnectWithoutGameIndicesInput";
import { TypesCreateWithoutGameIndicesInput } from "../inputs/TypesCreateWithoutGameIndicesInput";
import { TypesWhereUniqueInput } from "../inputs/TypesWhereUniqueInput";

@TypeGraphQL.InputType("TypesCreateNestedOneWithoutGameIndicesInput", {})
export class TypesCreateNestedOneWithoutGameIndicesInput {
  @TypeGraphQL.Field(_type => TypesCreateWithoutGameIndicesInput, {
    nullable: true
  })
  create?: TypesCreateWithoutGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => TypesCreateOrConnectWithoutGameIndicesInput, {
    nullable: true
  })
  connectOrCreate?: TypesCreateOrConnectWithoutGameIndicesInput | undefined;

  @TypeGraphQL.Field(_type => TypesWhereUniqueInput, {
    nullable: true
  })
  connect?: TypesWhereUniqueInput | undefined;
}
