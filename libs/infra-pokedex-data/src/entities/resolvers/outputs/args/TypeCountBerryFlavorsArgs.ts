import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BerryFlavorWhereInput } from "../../inputs/BerryFlavorWhereInput";

@TypeGraphQL.ArgsType()
export class TypeCountBerryFlavorsArgs {
  @TypeGraphQL.Field(_type => BerryFlavorWhereInput, {
    nullable: true
  })
  where?: BerryFlavorWhereInput | undefined;
}
