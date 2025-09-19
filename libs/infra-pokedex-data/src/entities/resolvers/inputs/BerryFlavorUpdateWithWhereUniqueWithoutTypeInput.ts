import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorUpdateWithoutTypeInput } from "../inputs/BerryFlavorUpdateWithoutTypeInput";
import { BerryFlavorWhereUniqueInput } from "../inputs/BerryFlavorWhereUniqueInput";

@TypeGraphQL.InputType("BerryFlavorUpdateWithWhereUniqueWithoutTypeInput", {})
export class BerryFlavorUpdateWithWhereUniqueWithoutTypeInput {
  @TypeGraphQL.Field(_type => BerryFlavorWhereUniqueInput, {
    nullable: false
  })
  where!: BerryFlavorWhereUniqueInput;

  @TypeGraphQL.Field(_type => BerryFlavorUpdateWithoutTypeInput, {
    nullable: false
  })
  data!: BerryFlavorUpdateWithoutTypeInput;
}
