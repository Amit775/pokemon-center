import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateOrConnectWithoutNaturesInput } from "../inputs/TypeCreateOrConnectWithoutNaturesInput";
import { TypeCreateWithoutNaturesInput } from "../inputs/TypeCreateWithoutNaturesInput";
import { TypeWhereUniqueInput } from "../inputs/TypeWhereUniqueInput";

@TypeGraphQL.InputType("TypeCreateNestedManyWithoutNaturesInput", {})
export class TypeCreateNestedManyWithoutNaturesInput {
  @TypeGraphQL.Field(_type => [TypeCreateWithoutNaturesInput], {
    nullable: true
  })
  create?: TypeCreateWithoutNaturesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeCreateOrConnectWithoutNaturesInput], {
    nullable: true
  })
  connectOrCreate?: TypeCreateOrConnectWithoutNaturesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeWhereUniqueInput], {
    nullable: true
  })
  connect?: TypeWhereUniqueInput[] | undefined;
}
