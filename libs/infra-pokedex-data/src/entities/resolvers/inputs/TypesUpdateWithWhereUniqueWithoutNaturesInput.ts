import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesUpdateWithoutNaturesInput } from "../inputs/TypesUpdateWithoutNaturesInput";
import { TypesWhereUniqueInput } from "../inputs/TypesWhereUniqueInput";

@TypeGraphQL.InputType("TypesUpdateWithWhereUniqueWithoutNaturesInput", {})
export class TypesUpdateWithWhereUniqueWithoutNaturesInput {
  @TypeGraphQL.Field(_type => TypesWhereUniqueInput, {
    nullable: false
  })
  where!: TypesWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypesUpdateWithoutNaturesInput, {
    nullable: false
  })
  data!: TypesUpdateWithoutNaturesInput;
}
