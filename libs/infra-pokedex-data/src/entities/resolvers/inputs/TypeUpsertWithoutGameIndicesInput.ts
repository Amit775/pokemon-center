import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeCreateWithoutGameIndicesInput } from "../inputs/TypeCreateWithoutGameIndicesInput";
import { TypeUpdateWithoutGameIndicesInput } from "../inputs/TypeUpdateWithoutGameIndicesInput";
import { TypeWhereInput } from "../inputs/TypeWhereInput";

@TypeGraphQL.InputType("TypeUpsertWithoutGameIndicesInput", {})
export class TypeUpsertWithoutGameIndicesInput {
  @TypeGraphQL.Field(_type => TypeUpdateWithoutGameIndicesInput, {
    nullable: false
  })
  update!: TypeUpdateWithoutGameIndicesInput;

  @TypeGraphQL.Field(_type => TypeCreateWithoutGameIndicesInput, {
    nullable: false
  })
  create!: TypeCreateWithoutGameIndicesInput;

  @TypeGraphQL.Field(_type => TypeWhereInput, {
    nullable: true
  })
  where?: TypeWhereInput | undefined;
}
