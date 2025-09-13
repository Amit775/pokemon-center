import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateOrConnectWithoutPartyTypesInput } from "../inputs/TypesCreateOrConnectWithoutPartyTypesInput";
import { TypesCreateWithoutPartyTypesInput } from "../inputs/TypesCreateWithoutPartyTypesInput";
import { TypesUpdateToOneWithWhereWithoutPartyTypesInput } from "../inputs/TypesUpdateToOneWithWhereWithoutPartyTypesInput";
import { TypesUpsertWithoutPartyTypesInput } from "../inputs/TypesUpsertWithoutPartyTypesInput";
import { TypesWhereInput } from "../inputs/TypesWhereInput";
import { TypesWhereUniqueInput } from "../inputs/TypesWhereUniqueInput";

@TypeGraphQL.InputType("TypesUpdateOneWithoutPartyTypesNestedInput", {})
export class TypesUpdateOneWithoutPartyTypesNestedInput {
  @TypeGraphQL.Field(_type => TypesCreateWithoutPartyTypesInput, {
    nullable: true
  })
  create?: TypesCreateWithoutPartyTypesInput | undefined;

  @TypeGraphQL.Field(_type => TypesCreateOrConnectWithoutPartyTypesInput, {
    nullable: true
  })
  connectOrCreate?: TypesCreateOrConnectWithoutPartyTypesInput | undefined;

  @TypeGraphQL.Field(_type => TypesUpsertWithoutPartyTypesInput, {
    nullable: true
  })
  upsert?: TypesUpsertWithoutPartyTypesInput | undefined;

  @TypeGraphQL.Field(_type => TypesWhereInput, {
    nullable: true
  })
  disconnect?: TypesWhereInput | undefined;

  @TypeGraphQL.Field(_type => TypesWhereInput, {
    nullable: true
  })
  delete?: TypesWhereInput | undefined;

  @TypeGraphQL.Field(_type => TypesWhereUniqueInput, {
    nullable: true
  })
  connect?: TypesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypesUpdateToOneWithWhereWithoutPartyTypesInput, {
    nullable: true
  })
  update?: TypesUpdateToOneWithWhereWithoutPartyTypesInput | undefined;
}
