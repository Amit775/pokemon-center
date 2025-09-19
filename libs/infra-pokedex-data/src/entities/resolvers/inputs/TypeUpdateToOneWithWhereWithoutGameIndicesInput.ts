import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeUpdateWithoutGameIndicesInput } from "../inputs/TypeUpdateWithoutGameIndicesInput";
import { TypeWhereInput } from "../inputs/TypeWhereInput";

@TypeGraphQL.InputType("TypeUpdateToOneWithWhereWithoutGameIndicesInput", {})
export class TypeUpdateToOneWithWhereWithoutGameIndicesInput {
  @TypeGraphQL.Field(_type => TypeWhereInput, {
    nullable: true
  })
  where?: TypeWhereInput | undefined;

  @TypeGraphQL.Field(_type => TypeUpdateWithoutGameIndicesInput, {
    nullable: false
  })
  data!: TypeUpdateWithoutGameIndicesInput;
}
