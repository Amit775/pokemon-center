import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypesUpdateWithoutNaturesIncreasedInput } from "../inputs/TypesUpdateWithoutNaturesIncreasedInput";
import { TypesWhereUniqueInput } from "../inputs/TypesWhereUniqueInput";

@TypeGraphQL.InputType("TypesUpdateWithWhereUniqueWithoutNaturesIncreasedInput", {})
export class TypesUpdateWithWhereUniqueWithoutNaturesIncreasedInput {
  @TypeGraphQL.Field(_type => TypesWhereUniqueInput, {
    nullable: false
  })
  where!: TypesWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypesUpdateWithoutNaturesIncreasedInput, {
    nullable: false
  })
  data!: TypesUpdateWithoutNaturesIncreasedInput;
}
