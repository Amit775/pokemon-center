import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesUpdateWithoutGameIndicesInput } from "../inputs/TypesUpdateWithoutGameIndicesInput";
import { TypesWhereInput } from "../inputs/TypesWhereInput";

@TypeGraphQL.InputType("TypesUpdateToOneWithWhereWithoutGameIndicesInput", {})
export class TypesUpdateToOneWithWhereWithoutGameIndicesInput {
  @TypeGraphQL.Field(_type => TypesWhereInput, {
    nullable: true
  })
  where?: TypesWhereInput | undefined;

  @TypeGraphQL.Field(_type => TypesUpdateWithoutGameIndicesInput, {
    nullable: false
  })
  data!: TypesUpdateWithoutGameIndicesInput;
}
