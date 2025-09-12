import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BerryFlavorsWhereInput } from "../../../inputs/BerryFlavorsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyBerryFlavorsArgs {
  @TypeGraphQL.Field(_type => BerryFlavorsWhereInput, {
    nullable: true
  })
  where?: BerryFlavorsWhereInput | undefined;
}
