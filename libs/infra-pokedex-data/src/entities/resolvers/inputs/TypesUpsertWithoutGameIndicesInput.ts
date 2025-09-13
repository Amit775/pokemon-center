import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesCreateWithoutGameIndicesInput } from "../inputs/TypesCreateWithoutGameIndicesInput";
import { TypesUpdateWithoutGameIndicesInput } from "../inputs/TypesUpdateWithoutGameIndicesInput";
import { TypesWhereInput } from "../inputs/TypesWhereInput";

@TypeGraphQL.InputType("TypesUpsertWithoutGameIndicesInput", {})
export class TypesUpsertWithoutGameIndicesInput {
  @TypeGraphQL.Field(_type => TypesUpdateWithoutGameIndicesInput, {
    nullable: false
  })
  update!: TypesUpdateWithoutGameIndicesInput;

  @TypeGraphQL.Field(_type => TypesCreateWithoutGameIndicesInput, {
    nullable: false
  })
  create!: TypesCreateWithoutGameIndicesInput;

  @TypeGraphQL.Field(_type => TypesWhereInput, {
    nullable: true
  })
  where?: TypesWhereInput | undefined;
}
